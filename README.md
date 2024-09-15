# QuadB Internship Assignment
- This assignment was developed with the aim of completing the assessment test given to me.
- In this project I have developed a clone webpage of a website called HODLINFO
- Technologies used:
1. HTML
2. CSS
3. Tailwind CSS
4. Node JS
5. Express JS
6. Axios
7. Postgresql

- A backend is created which fetches the required data from "https://api.wazirx.com/api/v2/tickers".
- The fetched data is stored in a Postgres Databse started locally on the system, for this the "pg" library is used tp write queries.
- Then an endpoint is created using express which the frontend can hit to retrieve the data fetched by the backend.
- The Frotend ustilises tailwind CSS to create a webpage nearly identical to Hodlinfo.com