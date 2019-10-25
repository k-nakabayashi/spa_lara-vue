<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel='stylesheet' href='/dist/css/flocss.css'>
  
</head>
<body id="sign-regi" class="bg-main">
  @head(['pattern' => 1])
  @endhead
  <main class="container u-conainer-y text-center">
    <h1>新規登録</h1>
    <form action="" class="sign-Form mt-5 text-left">
      <label class="mt-2" for="name">氏名</label>
      <input class="u-bg-tr text-left pl-2" type="email" name="" id="name" placeholder="苗字と名前を入力してください。">
      <label class="mt-2" for="location">住所</label>
      <input class="u-bg-tr text-left pl-2" type="password" name="location" id="location" placeholder="住所を入力してください。">
      <label class="mt-2" for="email">メールアドレス</label>
      <input class="u-bg-tr text-left pl-2" type="password" name="email" id="email" placeholder="メールアドレスを入力してください。">      
      <input class="u-bg-tr mt-3 text-left" type="password" name="pass" id="" placeholder="パスワードを入力してください。">
      <button type="button" class="btn btn-light w-100 u-text-pink mt-5">新規登録</button>
    </form>
    
  </main>
  <script src='/dist/js/jquery-3.3.1.slim.min.js'></script>
  <script src="/dist/js/bundle.js"></script>

</body>
</html>