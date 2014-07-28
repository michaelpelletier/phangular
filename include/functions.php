<?php

  function getJobs() {
    $sql = "select * from jobs order by id asc";
    $result = mysql_query($sql) or die(mysql_error());
    $data = array();
    while ($row = mysql_fetch_assoc($result)) {
      $data[]=$row;
    }

    return $data;
  }

  function getSkills() {
    $sql = "select * from skills order by id asc";
    $result = mysql_query($sql) or die(mysql_error());
    $data = array();
    while ($row = mysql_fetch_assoc($result)) {
      $data[]=$row;
    }

    return $data;
  }

  function getProjects() {
    $sql = "select * from projects order by id desc";
    $result = mysql_query($sql) or die(mysql_error());
    $data = array();
    while ($row = mysql_fetch_assoc($result)) {
      $data[]=$row;
    }

    return $data;
  }

  function getProjectById($id) {
    $sql="select * from projects where id=".$id;
    $result=mysql_query($sql) or die(mysql_error());
    $data=array();
      
    return mysql_fetch_assoc($result);
  }

  function getBlogPosts() {
    $sql = "select * from posts order by created_at desc limit 5";
    $result = mysql_query($sql) or die(mysql_error());
    $data = array();
    while ($row = mysql_fetch_assoc($result)) {
      $data[]=$row;
    }

    return $data;
  }
  
  function getBlogById($id) {
    $sql="select * from posts where id=".$id;
    $result=mysql_query($sql) or die(mysql_error());
    $data=array();
      
    return mysql_fetch_assoc($result);
  }

  function prepareJsonOutput($success, $data){
    return json_encode(array('success'=>$success, 'data'=>$data));
  }
?>
