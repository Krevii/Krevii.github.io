<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>marketplace</title>
    <link href="./Assets/styles/style.css" rel="stylesheet" />
    <link href="./Assets/image/favicon.png" rel="icon" />
</head>

<body>
    <?php
        include("header.php");
    ?>
    <main>
        <section class="table-gallery">
            <div class="ticker" style="--R:305; --T:10;"><div></div></div>
            <div class="ticker" style="--R:45; --T:90;"><div></div></div>
            <div class="ticker" style="--R:200; --T:0;"><div></div></div>
            <table class="table">
                <caption class="caption-text">Купите <a href="https://ru.wikipedia.org/wiki/NFT"><strong style="color: var(--text-color-second); text-shadow: 0px 0px 5px var(--text-color-second);">[ NFT ]</strong></a> нашей игры</caption>
                <tr>
                    <td colspan="2">
                        <a target="_blank" download href="./Assets/image/sticker-angry.png">
                            <img src="./Assets/image/sticker-angry.png" alt="img">
                        </a>
                     </td>
                     <td rowspan="2">
                        <a target="_blank" download href="./Assets/image/sticker-error.png">
                            <img src="./Assets/image/sticker-error.png" alt="img">
                        </a>
                     </td>
                     <td>
                        <a target="_blank" download href="./Assets/image/sticker-love.png">
                            <img src="./Assets/image/sticker-love.png" alt="img">
                        </a>
                     </td>
                </tr>
                <tr>
                    <td>
                        <a target="_blank" download href="./Assets/image/sticker-relaxed.png">
                            <img src="./Assets/image/sticker-relaxed.png" alt="img">
                        </a>
                     </td>
                     <td>
                        <a target="_blank" download href="./Assets/image/sticker-sad.png">
                            <img src="./Assets/image/sticker-sad.png" alt="img">
                        </a>
                     </td>
                     <td>
                        <a target="_blank" download href="./Assets/image/sticker-shocked.png">
                            <img src="./Assets/image/sticker-shocked.png" alt="img">
                        </a>
                     </td>
                </tr>
            </table>
        </section>
        <section class="list">
            <video class="list-video-background" src="./Assets/image/TwoCharacter.mp4" autoplay muted loop></video>
        </section>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="./Assets/scripts/scripts.js"></script>
    <script src="./Assets/scripts/laba.js"></script>
</body>

</html>