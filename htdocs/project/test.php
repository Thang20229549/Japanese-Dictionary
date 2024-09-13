<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header something">
        <button class="btn">Japanese</button>
        <button class="btn">English</button>
    </header>

    <div class="search-bar">
        <input type="text" id="kanjiInput" name="Kanji">
        <button id="searchBtn">Search</button>
    </div>

    <div id="searchResult"></div>

    <script>
    $(document).ready(function(){
        $("#searchBtn").click(function(e){
            e.preventDefault(); // Prevent form submission
            
            var kanjiValue = $("#kanjiInput").val();
            
            // Make AJAX request
            $.post("process.php", { Kanji: kanjiValue }, function(data) {
                // Display the response from the server
                $("#searchResult").html(data);
            });
        });
    });
    </script>
</body>
</html>
