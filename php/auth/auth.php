<?php 
    // чтобы смог получать данные без formData
    $_POST = json_decode(file_get_contents('php://input'), true);
    // echo json_encode($_POST);

    include "../connect.php";

    // вывод аватарок
    function authorization($connect) {
        $login = $_POST['login'];
        $password = $_POST['password'];

        // создаем массив
        $result = array();

        // заносим данные с базы в переменну
        $data = mysqli_query($connect, "SELECT * FROM `cdek-auth` WHERE `login` LIKE '".$login."' AND `password` LIKE '".$password."'");

        // проверка на пустоту запроса
        if(mysqli_num_rows($data) == 0) {
            echo json_encode(false);
        } else {
        // // складываем данные из бд в массив
        // while($row = $data->fetch_assoc()) {
        //     $result[] = $row;
        // };

        // // передаем массив данных из бд на фронт
        // echo json_encode($result);

            include "./token.php";
        }

        // закрываем соединение
        mysqli_close($connect);
    };

    authorization($connect);
?>
