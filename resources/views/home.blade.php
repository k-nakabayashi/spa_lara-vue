<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel='stylesheet' href='/dist/css/flocss.css'>
  
</head>
<body id="" class="bg-main">
  <header class="c-Header">
      <h1 class="u-text-pink text-center">おすすめ<a class="c-right-icon" href="/search"><img src="/dist/images/search-icon.png" alt=""></a></h1>
      <a class="u-down-arrow u-txt-b d-block text-center mt-3" href="./filter.html">フィルター</a>
  </header>
  <main class="u-conainer-y text-center">
    @head(['pattern' => "home"])
    @endhead
      <div class="c-Card-Hero">
        <img class="w-100" src="/dist/images/avator1.png" alt="">
        <div class="c-Card-Hero__detail text-center">
          <p class="">鈴木 花子</p>
          <p style="opacity: 0.5;">写真家,大阪</p>
          <p class="mt-2 mb-4">ほし</p>
        </div>
      </div>
      <div class="c-Card-Hero">
          <img class="w-100" src="/dist/images/avator2.png" alt="">
          <div class="c-Card-Hero__detail text-center">
            <p class="">Mike Wilson</p>
            <p style="opacity: 0.5;">Graphic Designer, Bristol</p>
            <p class="mt-2 mb-4">ほし</p>
          </div>
        </div>
    </main>
  <footer>

  </footer>
  <script src='/dist/js/jquery-3.3.1.slim.min.js'></script>
  <script src="/dist/js/bundle.js"></script>

</body>
</html>