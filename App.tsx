import { Data, animate, Override, Animatable } from "framer";
import "./styles.css";

const data = Data({ currentInbox: null });
let inboxes = [];

export const InboxIndex: Override = props => {
  return {
    onChangePage(pageIndex) {
      data.currentInbox = inboxes[pageIndex].props.id;
    }
  };
};

export const InboxScreen: Override = props => {
  inboxes = props.children;
};

export const Inbox: Override = props => {
  let inboxOpacity = 0;
  if (data.currentInbox === null) data.currentInbox = props.id;
  if (data.currentInbox === props.id) inboxOpacity = 1;
  return {
    opacity: inboxOpacity
  };
};
