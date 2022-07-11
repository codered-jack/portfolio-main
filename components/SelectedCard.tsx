import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Item } from './Items';
import { List } from './List';
import SectionTitle from './SectionTitle';

function SelectedCard({ id }) {
  return (
    <>
      {!id && <SectionTitle>projects</SectionTitle>}
      <List selectedId={id} />
      <AnimatePresence>{id && <Item id={id} key='item' />}</AnimatePresence>
    </>
  );
}

export default SelectedCard;
