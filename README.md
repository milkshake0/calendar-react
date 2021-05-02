# Calendar

원하는 날짜에 일정을 추가할 수 있는 달력입니다.
일정은 추가, 삭제, 체크/체크해제, 수정이 가능하며 모든 일정 데이터는 Mock Server인 json-server의 db.json 파일 내에 저장됩니다.

## How to run

cra 기본 실행
```
npm start
```

json-server 실행
```
npx json-server --watch ./db.json --port 4000
```

## Technology Stack
- react
- axios
- scss
