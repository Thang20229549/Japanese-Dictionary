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
    $query = "select * from kanji_eng_data";
    $results = $conn->query($query);
    if($results){
        while($rows = $results->fetch_assoc()){
            $content = '<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <style type="text/css">
            .drawing-kanji{
                background-color: #FFFFFF;
            width: 100%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
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
        width: 250px;
        height: 250px;
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
        <div id="image-holder">
        
        </div>
        <div class="kanji-draw-again">
        <button type="button" class="btn btn-primary btn-sm" onclick="resetDrawKanjiStroke()">
        <i class="fa fa-repeat"></i> Redraw
        </button>
        </div>
        </div>
        </div>';
        $content .= '<div class="kanji-content">';
        $content .= '<p><span>Mean: </span>'.$rows['mean'].'</p>';
        $rows['kun'] = str_replace(" ","&nbsp;&nbsp;&nbsp;&nbsp",$rows['kun']);
        $content .= '<p><span>Kun: </span>'.$rows['kun'].'</p>';
        $rows['on'] = str_replace(" ","&nbsp;&nbsp;&nbsp;&nbsp",$rows['on']);
        $content .= '<p><span>On: </span>'.$rows['on'].'</p>';
        $content .= '<p><span>Stroke Number: </span>'.$rows['stroke_count'].'</p>';
        $content .= '</div>';
        
        $id = $rows['id'];
        $query = "select * from kanji_example_eng where parent_id='$id'";
        $result = $conn->query($query);
        if($result && $result->num_rows > 0){
            $content .= '<div class="content">';
            $content .= '<div class="kanji-example">
            <b>Ví dụ:</b>
            <table class="table">
            <thead>
            <tr>
            <th class="table-col-2">Words</th>
            <th class="table-col-3">Hiragana</th>
            <th class="table-col-5">Mean</th>
            </tr>
            </thead>
            
            <tbody>';
            while($row = $result->fetch_assoc()) {
                $content .= '<tr ng-repeat="exam in data.examples" class="ng-scope">';
                $content .= '<td class="table-col-2 ng-binding" ng-click="search(exam.w)">'.$row["w"].'</td>';
                $content .= '<td class="table-col-3 ng-binding">'.$row["p"].'</td>';
                $row["h"] = mb_strtolower($row["h"], 'UTF-8');
                //$content .= '<td class="table-col-4 td-hidden ng-binding">'.$row["h"].'</td>';
                $content .= '<td class="table-col-5 ng-binding">'.$row["m"].'</td>';
            }
        }
        $content .=  '</tbody></table></div></div><script src="kanji.js"></script>';
        $content .= '<script type="text/javascript">
        var word = \''.$rows["kanji_name"].'\';
        window.onload = function() {
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
        $sql = "UPDATE kanji_eng_data SET content='$content' WHERE id='$id'";
        if ($conn->query($sql) === TRUE) {
            
        } else {
            echo "Error updating record: " . $conn->error;
        }
    }
    }
    //echo $content;
    $conn->close();
    echo "<h1>Sucessfully</h1>"
    ?>
