import React from "react";
import { useSelector, useDispatch } from "react-redux"
import {
  handleRatingChange,
  handleCommentChange,
  handleUserIDChange,
  handleResortIDChange,
  reset,
  error,
} from  "./userCreateCommentSlice";
import { useCreateCommentMutation } from loginauth
import ErrorMessage from "../../errorhandling/ErrorMessage";
import { useNavigate }
