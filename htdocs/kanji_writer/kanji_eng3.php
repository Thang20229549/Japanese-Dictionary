<?php 
$servername = "localhost";
$username = "haunguye_tien";
$password = "hoangtien@12345";
$dbname = "haunguye_tien";
$content = '';
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo chr(0xEF).chr(0xBB).chr(0xBF);
$host= gethostname();
$ip = gethostbyname($host);
$kanji = $_GET["kanji"];
$split_kanji = str_split($kanji, 3);
$content = '<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
        <style type="text/css">
        .drawing-kanji{
            background-color: #FFFFFF;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            padding-top: 0px;
            padding-bottom: 0px;
        }
        .content{
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            min-height: 235px;
            padding-top: 20px;
            padding-bottom: 20px;
            margin-bottom: 0px;
            padding: 0px;
        }
        .drawing-kanji #image-holder-conti{
            margin-left: auto;
            margin-right: auto;
            display: block;
            position: relative;
        }
        .kanji-draw-again {
            position: absolute;
            bottom: 10px;
            right: 0px;
        }
        .kanji-draw-again button {
            color: #fff;
            background-color: #0c57d3;
            border-color: #093d94;
            display: inline-block;
            margin-bottom: 0;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 6px 8px;
            font-size: 16px;
            line-height: 1.42857143;
            border-radius: 2px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .kanji-content {
            width: 96%;
            padding: 2%;
            border-radius: 10px;
            background-color: #FFFFFF;
            margin: auto;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .kanji-content p {
            padding-left: 10px;
            text-align: left;
            line-height: 2em;
            color: #444343;
            font-weight: lighter;
            margin: 0px;
        }
        .kanji-content p span {
            color: grey;
        }
        .kanji-example {
            width: 96%;
            display: inline-block;
            padding: 2%;
            border-radius: 10px;
            background-color: #FFFFFF;
        }
        table {
            width: 100%;
            text-align: left;
            font-size: 16px;
        } 
        table tr td {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            min-width: 80px;
        }
        table thead tr th {
            padding: 8px;
            line-height: 1.42857143;
        }
        </style>
    </head>';
$content .= '<body style="background-color: #f0f2f5; margin: 0; padding: 0">
        <div class="drawing-kanji">
            <div id="image-holder-conti">
                <div id="image-holder" style="text-align: center;">
                    
                </div>
                <div class="kanji-draw-again">
                    <button type="button" class="btn btn-primary btn-sm" onclick="resetDrawKanjiStroke()">
                        <i class="fa fa-repeat"></i> Redraw
                    </button>
                </div>
            </div>
        </div>';
$content .=  '<script src="http://www.vnsapa.com/ti/kanji_writer/kanji1.js"></script>';
//var_dump($kanji[0]);die();
$kanji_name = '"'.$kanji.'"';
$content .= '<script type="text/javascript">
            var word = '.$kanji_name.';
            var heightCtn = window.innerHeight;
            var widthCtn = window.innerWidth;

            window.onload = function() {
                $(".drawing-kanji #image-holder-conti").css("width", heightCtn + "px");
                $(".drawing-kanji #image-holder-conti").css("height", heightCtn + "px");
                $("#image-holder").dmak(word, e());
            }
            function draw() {
                $("#image-holder").dmak(word, e());
            }
            function resetDrawKanjiStroke() {
                var a = $("#image-holder");
                a.html("");
                a.data("plugin_dmak") && (a.dmak("reset"), a.data("plugin_dmak", null)), draw();
            }
        </script></body>    
</html>';

$content = str_replace("'","\'",$content);
echo $content;
//echo $content;
$conn->close();
?>
