<?php
	
	
	header("Content-type:text/html;charset=utf-8");
	$sqlconn = new mysqli("127.0.0.1", "root", "", "lvyou");
    mysqli_query($sqlconn, "set character set 'utf8'");
    mysqli_query($sqlconn, 'set names utf8');
    
    $i=0;
    $num=6;
    
    $obj=json_decode($_POST["shu"],true);
    
    for ($i;$i<$num;$i++)
	{
		$ids = $obj[$i]["id"];    //跟json数据一一对应，和下方也一一对应
		
		$names = $obj[$i]["name"];
		
		$imgsrc = $obj[$i]["img"];
		echo $imgsrc;
		$titles = $obj[$i]["title"];
		
		$prices = $obj[$i]["price"];
	
		$pros = implode(',',$obj[$i]["pro"]);   //把数据转换成字符串
		
		$proImg = implode(',',$obj[$i]["imgs"]);
		                                   //跟上面的一一对应
		$insert_order_sql="INSERT INTO NEW (myId,myName,myImg,myTitle,myPrice,myPro,myImgs) VALUES (?,?,?,?,?,?,?)";
		$result=$sqlconn->prepare($insert_order_sql);
		$result->bind_param("sssssss",$ids,$names,$imgsrc,$titles,$prices,$pros,$proImg);
		$result->execute();   // s表示字符串
	}

?>