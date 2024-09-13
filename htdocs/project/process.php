

<?php

// Check if Kanji value is set

    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "dictionary";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_POST['action']=="search") {
        // Search for Kanji-form words
        $Word = mysqli_real_escape_string($conn, $_POST['Word']);
        $sql = "SELECT Yomikata, Imi FROM jisho WHERE Kanji = ?";

        // Prepare statement
        $stmt = $conn->prepare($sql);

        // Bind parameters
        $stmt->bind_param("s", $Word);

        // Execute statement
        $stmt->execute();

        // Get result
        $result1 = $stmt->get_result();

        // Fetch data
        
        if ($result1->num_rows > 0) {
            // Fetch and process data
            $yomi_base = "a";
            $rowNumber = 1;
            while ($row = $result1->fetch_assoc()) {
                
                if ($yomi_base == "a") {
                
                    $yomi_base = $row['Yomikata'];
                    echo "<ruby> $Word <rt> $yomi_base</rt> </ruby> <br>";
                    echo $rowNumber. ". ". $row['Imi'] ;
                    echo "<br>";
                    $imi_base = $row['Imi'];
                    $rowNumber++;
                    continue;
                } 
                elseif ($yomi_base == $row['Yomikata']) {
                    if ($imi_base == $row['Imi']) {
                        continue;
                    } else {
                        echo "$rowNumber. ";
                        echo $row['Imi'];
                        echo "<br>";
                        $rowNumber++;
                        continue;
                    }
                } else {
                    $rowNumber = 1;
                    $yomi_base = $row['Yomikata'];
                    echo "<br>";
                    echo "<ruby> $Word <rt> $yomi_base</rt> </ruby> <br>";
                    echo "$rowNumber. ";
                    echo $row['Imi'];
                    echo "<br>";
                    $rowNumber++;
                    continue;
                }
             // Close statement and connection
            }
            $result2 = -1;
            $result3 = -1;     
        }
        // Search for Katakana word
        if ($result1->num_rows <= 0) {
            $Word = mysqli_real_escape_string($conn, $_POST['Word']);
            $sql = "SELECT Kanji, Yomikata, Imi, rank FROM jisho WHERE Yomikata = ? ORDER BY rank ASC;";
    
            // Prepare statement
            $stmt = $conn->prepare($sql);
    
            // Bind parameters
            $stmt->bind_param("s", $Word);
    
            // Execute statement
            $stmt->execute();
            // Get result
            $result2 = $stmt->get_result();
            if ($result2->num_rows > 0) {
                    while ($row = $result2->fetch_assoc()) {
                        echo "<div class='Jp-res'>
                            <div class = 'kan-details' >{$row['Kanji']}</div>
                            <div class = 'kan-details2' ><ruby>{$row['Kanji']}<rt>{$row['Yomikata']}</rt></ruby></div>
                            <div>
                            {$row['Imi']}
                            <button class = 'details'>See Details</button>
                            </div>
                        </div>";
                        }                
                    }
            $result3 = -1;
        }
        // Search for English word
        
        if ($result1->num_rows <= 0 and $result2->num_rows <= 0) {          
            $Word = mysqli_real_escape_string($conn, $_POST['Word']);
            $sql = "SELECT Kanji, Yomikata, Imi, rank FROM jisho WHERE MATCH(Imi) AGAINST(? IN BOOLEAN MODE)ORDER BY rank ASC;";
    
            // Prepare statement
            $stmt = $conn->prepare($sql);
    
            // Bind parameters
            $stmt->bind_param("s", $Word);
    
            // Execute statement
            $stmt->execute();
            // Get result
            $result3 = $stmt->get_result();
            if ($result3->num_rows > 0) {
            while ($row = $result3->fetch_assoc()) {
                echo "<div class='Jp-res'>
                    <div class = 'kan-details' >{$row['Kanji']}</div>
                    <div class = 'kan-details2' ><ruby>{$row['Kanji']}<rt>{$row['Yomikata']}</rt></ruby></div>                            
                    <div>
                    {$row['Imi']}
                    <button class = 'details'>See Details</button>
                    </div>
                </div>";
                }                
            }
        }

        if ($result1->num_rows <= 0 and $result2->num_rows <= 0 and $result3->num_rows <= 0){
            echo "<div>No Result found</div>";
        }

            // Close statement and connection
            $stmt->close();
            $conn->close();  
        }

   
    




    if($_POST['action']=="kanji-sep") {
        echo "<div>Kanji:</div>";
            // Split the word into individual characters
            $Word = $_POST['Word'];
            $kan = mb_str_split($Word);
            $kan = array_unique($kan);
            $alphabet = array(
                'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ',
                'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ',
                'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん',
                'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ',
                'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'きゃ', 'きゅ', 'きょ', 'しゃ', 'しゅ',
                'しょ', 'ちゃ', 'ちゅ', 'ちょ', 'にゃ', 'にゅ', 'にょ', 'ひゃ', 'ひゅ', 'ひょ', 'みゃ', 'みゅ',
                'みょ', 'りゃ', 'りゅ', 'りょ', 'ぎゃ', 'ぎゅ', 'ぎょ', 'じゃ', 'じゅ', 'じょ', 'びゃ', 'びゅ',
                'びょ', 'ぴゃ', 'ぴゅ', 'ぴょ', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ',
                'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ',
                'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ',
                'ワ', 'ヲ', 'ン', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ',
                'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'キャ', 'キュ', 'キョ',
                'シャ', 'シュ', 'ショ', 'チャ', 'チュ', 'チョ', 'ニャ', 'ニュ', 'ニョ', 'ヒャ', 'ヒュ', 'ヒョ',
                'ミャ', 'ミュ', 'ミョ', 'リャ', 'リュ', 'リョ', 'ギャ', 'ギュ', 'ギョ', 'ジャ', 'ジュ', 'ジョ',
                'ビャ', 'ビュ', 'ビョ', 'ピャ', 'ピュ', 'ピョ', 'ファ', 'フィ', 'フェ', 'フォ', 'フュ', 'ウィ',
                'ウェ', 'ウォ', 'ヴァ', 'ヴィ', 'ヴェ', 'ヴォ', 'ツァ', 'ツィ', 'ツェ', 'ツォ', 'チェ', 'シェ',
                'ジェ', 'ティ', 'ディ', 'デュ', 'トゥ','A','a','B','b','C','c','D','d','E','e','F','f','G','g','
                H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s',
                'T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','っ','々','?','!',',',';',':','"',"'",'-','()','[]','.','/','—'
            );
            
            
        
            foreach ($kan as $k) {
                if (!in_array($k, $alphabet)) {
                    echo " <button class='kan_se' style='font-size:1.5rem'>$k</button>";
                }
            }
            // Need to add exclude duplicates
    }

    if($_POST['action'] == "search-kan") {
            // Prepare SQL statement with placeholder for Kanji
            $kanji = mysqli_real_escape_string($conn, $_POST['Kanji']);
            $sql = "SELECT meanings FROM Characters WHERE kanji = ?";
    
            // Prepare statement
            $stmt = $conn->prepare($sql);
    
            // Bind parameters
            $stmt->bind_param("s", $kanji);
    
            // Execute statement
            $stmt->execute();
    
            // Get result
            $result = $stmt->get_result();
    
            // Fetch data
        
            $response = array(); // Array to store the response

            if ($result->num_rows == 0) {
                $response['meaning'] = "No result found";
                $response['control'] = 0;
            } else {
                $meanings = array();
                while ($row = $result->fetch_assoc()) {
                    $meanings[] = $row['meanings']; // Store all meanings
                }
                $response['meaning'] = implode(", ", $meanings); // Join all meanings if multiple
                $response['control'] = 1;
            }
            
            echo json_encode($response); // Encode the array as JSON
    
        $stmt->close();
        $conn->close();
    }


?>
