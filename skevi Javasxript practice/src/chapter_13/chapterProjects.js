const allowed = ["1234", "pass", "apple"];

function pswdChecker(password) {
  allowed.includes(password);
}

function login(para) {
  return new Promise((resolve, reject) => {
    if (allowed.includes(para)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}
function check(pass) {
  login(pass).then(token => {
    console.log('resolved password');
    console.log(token.status);
  }).catch ( value => {
    console.log('rejected password');
    console.log(value.status);
  })
}
allowed.push('shahzad'); // not in array
check('shahzad');
check('1234');
// both check same
check(1234);
check('123');
// both check same && false