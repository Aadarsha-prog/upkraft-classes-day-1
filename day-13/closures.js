// // function A(n) {
// //   let x = 0;
// //   console.log("A", x);

// //   return function B() {
// //     x = x + 10;
// //     console.log("Bx", x);
// //     console.log("Bn", n);
// //     return function C() {
// //       x = x + 10;
// //       console.log("C", x);
// //     };
// //   };
// // }

// // const BRef = A();

// // console.log("SOme work 1");
// // console.log("SOme work 2");
// // console.log("SOme work 3");
// // console.log("SOme work 4");
// // console.log("SOme work 5");
// // console.log("SOme work 6");

// // const CRef = BRef();

// // console.log("SOme work 1");
// // console.log("SOme work 2");
// // console.log("SOme work 3");
// // console.log("SOme work 4");
// // console.log("SOme work 5");
// // console.log("SOme work 6");

// // CRef();
// // // function A() {
// // //   const x = 123;
// // // }

// // // A();

// function Button(props) {
//   return `<button>${props.label}</button>`;
// }

// function H1(props) {
//   return `<h1>${props.text}</h1>`;
// }

// // A function that takes a component and returns a new one
// function withLogger(Component) {
//   return function Wrapped(props) {
//     console.log("rendering", Component.name, props);
//     return Component(props);
//   };
// }

// // const LoggedButton = withLogger(Button);
// // const htmlBtn = LoggedButton({ label: "Click me" });
// // console.log(htmlBtn);

// // const LoggedH1 = withLogger(H1);
// // const htmlH1 = LoggedH1({ text: "Hello World" });
// // console.log(htmlH1);

// function isLogged(token) {
//   return token === "valid-token";
// }

// function withAuth(Component) {
//   return function Wrapped(props) {
//     const isLoggedIn = isLogged(props.token);

//     if (!isLoggedIn) return `<h1>Not Authorized</h1>`;

//     return Component(props);
//   };
// }

// function Card({ token }) {
//   return `<div>User info card ${token}</div>`;
// }

// const AuthCard = withAuth(Card);
// const htmlCard = AuthCard({ token: "invalid-token" });
// console.log(htmlCard);

// app.use("/card", (req, res) => {
//   const AuthCard = withAuth(Card);
//   const htmlCard = AuthCard({ token: req.headers.token });
//   res.send(htmlCard);
// });

const X = Object.freeze({
  name: "Suparth",
});

X.name = "Arbin";

console.log(X.name); // Suparth

// // Why cant?
// X = {
//   name: "Arbin",
// };

// Why can?
// X.name = "Arbin";
const x = Math.floor(1.5);

console.log(x); // 1
