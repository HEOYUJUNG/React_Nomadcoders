## 1) To Do List
- state에 배열 만들고 새로운 item 추가하기
- 배열에 있는 item들 화면에 띄우기

<hr>

## 2) Coin Tracker
- 코인 API : https://api.coinpaprika.com/v1/tickers 
  => fetch해서 api로부터 데이터 받아온 결과
  <img src="https://github.com/HEOYUJUNG/React_Nomadcoders/assets/122508448/3e58df1b-36df-4ef5-b13a-ea5e4c6f3094" width="40%" height="30%" title="API response" alt="API response"></img>
- 로딩 중일 때 / 로딩 완료되었을 때 화면 다르게 띄우기
- state 배열에 있는 item들 화면에 띄우기

<hr>

## 3) Movie App
- 영화 API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
  => 별점이 8.5 이상인 영화를 연도 순으로 정렬해서 가져오겠다!
- then말고 async - await 방식 사용
- Movie를 별도의 컴포넌트로 만듦 => props 내려줄 때 PropTypes로 각 속성의 형식 지정해주기!
- 영화 제목 클릭 시 디테일 페이지로 이동 
  
  > ### 라우팅 
  - App.js에서 하던 것들을 Home.js라는 별도의 컴포넌트로 옮기고, App.js에서는 reac-router-dom의 컴포넌트들을 사용해서 라우팅 작업을 해준다.
  - ``` npm install react-router-dom ``` 설치
  ```javascript
     <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ```
  📌 ```<Router>``` : router를 먼저 렌더링한다. 이 안에 유저에게 보여주고 싶은 컴포넌트들이 들어있다.    
  📌 ```<Switch>``` : 한 번에 하나의 컴포넌트만 렌더링 하기 위함 (✅React Router는 2개의 route를 한 번에 렌더링 할 수도 있다!)   
  📌 ```<Route>``` : url에 해당하는 컴포넌트를 보여준다.   
  📌 ```<Link>``` : 브라우저의 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트    
  📌 ```useParams``` : url에서 변수 값을 가져온다.

<hr>

## +) Publishing (배포)
1) ```npm i gh-pages``` : 결과물을 github pages에 업로드 해주는 패키지 (✅github pages는 html, css, javascript를 올리면 웹사이트로 만들어서 무료로 배포해줌) 
2) ```npm run build``` : 우리 웹사이트의 production ready(코드가 압축되고 최적화) code를 생성
3) package.json 마지막에 추가   
  ```  "homepage": "https://[git 사용자이름].github.io/[코드가 있는 git repository 이름]" ```
  나의 경우는 https://HEOYUJUNG.github.io/react-for-beginners
4) package.json의 scripts에 추가
   ```
    "deploy": "gh-pages -d build",  // gh-pages가 homepage에 적어놓은 웹사이트에 build 폴더를 업로드하도록 함
    "predeploy": "npm run build"
   ```
5) ```npm run delpoy``` 하면 npm run build > react-scripts build > gh-pages -d build 차례로 실행
6) https://HEOYUJUNG.github.io/react-for-beginners url로 들어가면 내가 만든 웹사이트가 보인다!!😲🤓👍
