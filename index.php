<?php
  if ( $_SERVER['REMOTE_USER']  === 'grae' || $_SERVER['REMOTE_USER'] === 'raines' || $_SERVER['REMOTE_USER']  === 'alexr' || $_SERVER['REMOTE_USER'] === 'iglpdc') 
  {
    header('Location: https://jukebox.nmr.mgh.harvard.edu/petbilling/grae/grae.php');
    exit;
  };
  if ( $_SERVER['REMOTE_USER']  === 'judit' || $_SERVER['REMOTE_USER']  === 'alexr' || $_SERVER['REMOTE_USER'] === 'iglpdc') 
  {
    header('Location: https://jukebox.nmr.mgh.harvard.edu/petbilling/judit/judit.php');
    exit;
  }
  else 
  {
    header('Location: https://jukebox.nmr.mgh.harvard.edu/petbilling/error.php');
    exit;
  }
?>

