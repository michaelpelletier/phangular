<?php
  include_once('include/config.php');
  include_once('include/functions.php');
  
  if     ($_GET['action'] == 'home')          { $data = getAllPost(); } 
  elseif ($_GET['action'] == 'jobs')          { $data = getJobs(); } 
  elseif ($_GET['action'] == 'skills')        { $data = getSkills(); } 
  elseif ($_GET['action'] == 'blog_details')  { $data = getPostById($_GET['blogId']); }
  echo prepareJsonOutput(1, $data);
  
?>
