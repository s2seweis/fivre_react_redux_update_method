import { firestore } from './../../firebase/utils';
import { updateCategory, setCategoriesLoading, setCategories } from './categories.actions';


export const handleAddCategory = category => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('categories')
      .doc()
      .set(category)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchCategories = ({ filterType, startAfterDoc, persistCategories=[] }) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    // productCategory possible orderBy
    let ref = firestore.collection('categories').orderBy('createdDate').limit(pageSize);

    if (filterType) ref = ref.where('productCategory', '==', filterType);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then(snapshot => {
        const totalCount = snapshot.size;

        const data = [
          ...persistCategories,
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1
        });
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeleteCategory = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('categories')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleUpdateCategory = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('categories')
      .doc(documentID)
      .update()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const categoryUpdate = (categoryId, data) => (dispatch) => {
    firestore
    .collection("categories")
    .doc(categoryId)
    .update({
      categoryName: data.title,
    })
    .then(() => {
      dispatch(updateCategory({ categoryId, data }));
    });
};


export const getCategories = () => async (dispatch) => {
  dispatch(setCategoriesLoading(true));

  const categories = await firestore().collection("categories").get();

  const allCategories = [];

  categories.forEach((category) => {
    if (category.id !== "27g9Q1JzQmEZbQ8AxaBg") {
      allCategories.push({ category: category.data(), categoryId: category.id });
    }
  });

  dispatch(setCategoriesLoading(false));
  dispatch(setCategories(allCategories));
};

export const handleFetchCategory = (categoryID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('categories')
      .doc(categoryID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: categoryID
          });
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}