import { put, takeLatest } from 'redux-saga/effects';

const initialPackage = {
    "productDetails": [
    {
    "productId": "2lb-Bag-400",
    "productName": "Bulk M&M'S� Candy (2-lb Bag)",
    "productdescription": "Buy the world�s favorite custom candy in bulk! Ideal for cooking, decorating, or simply showing that special someone how much you care, bulk M&M�S� candies let you express yourself with chocolate.",
    "categoryName": "All Products, Bulk bags",
    "categoryId": "12345, 123catid",
    "isActive": true,
    "servings": 12,
    "productImageUrl": "https://ii.mymms.com/fcgi-bin/iipsrv.fcgi?FIF=/images/mymms/source/us-products/PR041-2lb-bulk-1000.tif&wid=1000=&cvt=jpeg",
    "minimumQtyPurchase": 1,
    "minimumQtyIncrement": 1,
    "skus": [
    {
    "sku": "701120~90010",
    "regPrice": "$39.49",
    "salePrice": "$29.99",
    "onSale": true,
    "stockCount": 95400,
    "isActive": true,
    "options": "Color Only"
    },
    {
    "sku": "701120~90008",
    "regPrice": "$44.99",
    "salePrice": "$39.99",
    "onSale": true,
    "stockCount": 56789,
    "isActive": true,
    "options": "With Clip-Art/Messages"
    },
    {
    "sku": "701120~90008C",
    "regPrice": "$49.99",
    "salePrice": "$39.99",
    "onSale": true,
    "stockCount": 56789,
    "isActive": true,
    "options": "With Licensed Clip-Art"
    },
    {
    "sku": "701120~90008I",
    "regPrice": "$49.99",
    "salePrice": "$39.99",
    "onSale": true,
    "stockCount": 56789,
    "isActive": true,
    "options": "With Photo"
    }
    ]
    },
    {
    "productId": "pink-heart-party-favor-pack",
    "productName": "Personalized Pink Heart M&M�S Party Favor Pack",
    "productdescription": "We heart these adorable pink party favors. Personalize them and they are perfect for weddings, anniversaries, birthdays, school events, or any festivity surrounded by love. ",
    "categoryName": "All Products, Party Favors",
    "categoryId": "12345, 124catid",
    "isActive": true,
    "servings": 0.5,
    "productImageUrl": "https://ii.mymms.com/fcgi-bin/iipsrv.fcgi?FIF=/images/mymms/source/us-products/vday2017/romance-hearts-pillowpack.tif&wid=1000=&cvt=jpeg",
    "minimumQtyPurchase": 20,
    "minimumQtyIncrement": 10,
    "skus": [
    {
    "sku": "701120~J0416A",
    "regPrice": "$1.59",
    "salePrice": "",
    "onSale": false,
    "stockCount": 95400,
    "isActive": true,
    "options": "Color Only"
    },
    {
    "sku": "701120~J0418A",
    "regPrice": "$2.69",
    "salePrice": "",
    "onSale": false,
    "stockCount": 56789,
    "isActive": true,
    "options": "With Clip-Art/Messages"
    }
    ]
    }
    ]
    }



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