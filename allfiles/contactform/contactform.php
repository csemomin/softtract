<?php
    require_once '../db.php'; 
    date_default_timezone_set("Asia/Dhaka");
    
    function notvalidNumber($msisdn) {
       $code = null;
       if (strlen($msisdn) == 11) {
           $code = substr($msisdn, 0, 3);
       } elseif (strlen($msisdn) == 13) {
           $code = substr($msisdn, 2, 3);
       } elseif (strlen($msisdn) == 14) {
           $code = substr($msisdn, 3, 3);
       }elseif (strlen($msisdn) == 15) {
           $code = substr($msisdn, 4, 3);
       }

       if($code != null && ($code == '014' || $code == '015' || $code == '016' || $code == '017' || $code == '018' || $code == '019')) {
           return false;
       } else {
           return true;
       }
   }

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $contact_time = date('Y-m-d H:i:s');
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        // $phone = $_POST['phone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        
       // $show = notvalidNumber($phone);
        $sql = "INSERT INTO `contact_user`(`id`, `subject`, `message`, `name`, `email`, `phone`, `contact_time`, `response_time`) VALUES (null,'$subject','$message',,'$name','$email','','$contact_time','')";
    //   echo  
        // exit;
        
        $stmt = $db->prepare($sql);
    
        $insert_value = $stmt->execute();
        
        echo $insert_value;
        // var_dump($insert_value);exit;
    } 
        
?>