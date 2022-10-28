
const url ='https://script.google.com/macros/s/AKfycbwsOSp7za7Znet8GRI459Cf1TTNUfUFz7XNjIpqviEoxZWpURGvqooe5aMSgdtu60Hi/exec?';

const APIs = {
  getUsersAPI:
     url + "action=getUsers&top=20&username=",
  getLogin:
     url + "action=getLogin", 
   
   err_Login : "Tài khoản mật khẩu không đúng"
};



export default APIs;

