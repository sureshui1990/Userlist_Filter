import { put, takeLatest } from 'redux-saga/effects';

function* fetchNews() {

    const json = yield fetch('https://reqres.in/api/users?page=2')
          .then(response => response.json(), );    
  
          console.log('saga file',json)
    yield put({ type: "USER_DATA_THROUGH_SAGA", payload:json, });
  }


function* fetchPackageData(){
    const data = yield fetch('https://mymms-v162-rev.aws.marketlive.com/text/PhotonCatalog.json')
          .then(response => response.json())
          .catch(() => initialPackage)
    yield put({ type: "PACKAGE_DATA_SAGA", payload: data, });
}

// const postData = {
//     url: 'https://reqres.in/api/users',
//     body : {
//         "name": "morpheus",
//         "job": "leader"
//     }
// }
function* fetchPostData(){
    const data = yield fetch('https://mymms-v162-rev.aws.marketlive.com/text/PhotonCatalog.json')
          .then(response => response.json())
          .catch(() => initialPackage)
    yield put({ type: "PACKAGE_DATA_SAGA", payload: data, });
}

function* actionWatcher() {
    yield takeLatest('GET_USER_DATA', fetchNews)
    yield takeLatest('PACKAGE_DATA', fetchPackageData);
    yield takeLatest('POST_DATA', fetchPostData);
}

export default actionWatcher;