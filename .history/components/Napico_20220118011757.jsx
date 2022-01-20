import Link from "next/link";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

function Napico() {
    return (
        <>
        <span onClick={handleClick("Add to Favorites")}>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </span>
            <span onClick={handleClick("Add to Bookmark")}>
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
              </span>
         
            <Snackbar
              key={messageInfo ? messageInfo.key : undefined}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              TransitionProps={{ onExited: handleExited }}
              message={messageInfo ? messageInfo.message : undefined}
              action={
                <React.Fragment>
                  <Button color="primary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </React.Fragment>
              }
            /></>
    )
}

export default Napico