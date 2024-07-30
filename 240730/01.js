const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";


function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    try {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(url == API_URL) {
                    resolve("성공");
                } else {
                    reject(new Error(`실패 : URL ${url}과 API_URL 일치하지 않습니다.`));
                }
            },3000)
            });
    } catch (error) {
        console.log(error);
    }
}


// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
// 성공
getData(API_URL)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//실패
getData(WRONG_URL)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
    

