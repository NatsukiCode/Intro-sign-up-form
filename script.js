// フォームの送信イベントを監視し、バリデーションを実行する
document.getElementById('myForm').addEventListener('submit', function(event) {
    // デフォルトのフォーム送信をキャンセル
    event.preventDefault();
  
    // 各入力フィールドの値を取得
    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
  
    // 各エラーメッセージの要素を取得
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
  
    // エラーメッセージをリセット（非表示にする）
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
  
    // フォームのバリデーションを実行
    var isValid = true;
  
    if (firstNameInput.value.trim() === '') {
      firstNameError.innerText = 'First Name cannot be empty';
      firstNameError.style.display = 'block';
      isValid = false;
    }
  
    if (lastNameInput.value.trim() === '') {
      lastNameError.innerText = 'Last Name cannot be empty';
      lastNameError.style.display = 'block';
      isValid = false;
    }
  
    if (emailInput.value.trim() === '') {
      emailError.innerText = 'Email Address cannot be empty';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.innerText = 'Looks like this is not an email';
      emailError.style.display = 'block';
      isValid = false;
    }
  
    if (passwordInput.value.trim() === '') {
      passwordError.innerText = 'Password cannot be empty';
      passwordError.style.display = 'block';
      isValid = false;
    }
  
    // バリデーションが成功した場合にのみフォームを送信
    if (isValid) {
      // フォームの送信処理を実行
      this.submit();
    }
  });
  
  // 正規表現を使用してメールアドレスの形式をチェックする関数
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }