const myButton = document.getElementById('submitbtn');
myButton.addEventListener('click', runValidation);
  
function runValidation(){

    // 各入力フィールドの値を取得
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput = document.getElementById('lastName');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
  
    // 各エラーメッセージの要素を取得
    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    //各エラーアイコンの要素を取得
    let firstNameErrorIcon = document.getElementById('firstNameErrorIcon');
    let lastNameErrorIcon = document.getElementById('lastNameErrorIcon');
    let emailErrorIcon = document.getElementById('emailErrorIcon');
    let passwordErrorIcon = document.getElementById('passwordErrorIcon');
  
    // エラーメッセージをリセット（非表示にする）
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    //errorクラスのスタイルを非表示にする
    firstNameInput.classList.remove('error');
    lastNameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');

    //エラーアイコンを非表示にする
    firstNameErrorIcon.style.display = 'none';
    lastNameErrorIcon.style.display = 'none';
    emailErrorIcon.style.display = 'none';
    passwordErrorIcon.style.display = 'none';

    if (firstNameInput.value.trim() === '') {
      firstNameError.innerText = 'First Name cannot be empty';
      firstNameError.style.display = 'block';
      firstNameInput.classList.add('error');
      firstNameErrorIcon.style.display = 'block';
      firstNameInput.placeholder = ''; 
    }
      
    if (lastNameInput.value.trim() === '') {
      lastNameError.innerText = 'Last Name cannot be empty';
      lastNameError.style.display = 'block';
      lastNameInput.classList.add('error');
      lastNameErrorIcon.style.display = 'block';
      lastNameInput.placeholder = '';
    }
  
    if (emailInput.value.trim() === '') {
      emailError.innerText = 'Email Address cannot be empty';
      emailError.style.display = 'block';
      emailInput.classList.add('error');
      emailErrorIcon.style.display = 'block';
      emailInput.placeholder = '';
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.innerText = 'Looks like this is not an email';
      emailError.style.display = 'block';
      emailInput.classList.add('error');
      emailErrorIcon.style.display = 'block';
      emailInput.placeholder = '';
    }
  
    if (passwordInput.value.trim() === '') {
      passwordError.innerText = 'Password cannot be empty';
      passwordError.style.display = 'block';
      passwordInput.classList.add('error');
      passwordErrorIcon.style.display = 'block';
      passwordInput.placeholder = '';
    }
   
  // 正規表現を使用してメールアドレスの形式をチェックする関数
  function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}