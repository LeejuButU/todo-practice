import styled from "styled-components";
import ListArea from "./ListArea";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import FriendList from "./components/FriendList";
import Category from "./components/Category/Category";

const MainLayoutStyle = styled.div`
  background-color: #000;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainLayout = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const getItems = async () => {
    const data = await fetch("http://localhost:8080/todo")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        return [];
      });

    console.log(data);

    const initItems = data.map((item) => {
      return {
        id: item.itemId,
        content: item.content,
        check: item.checked,
      };
    });

    setItems(initItems);
    console.log("items");
    console.log(initItems);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  const addItem = (event) => {
    const newItems = [];

    for (let i = 0; i < items.length; i++) {
      newItems.push(items[i]);
    }

    const todoItem = {
      id: count,
      content: "content " + count,
      check: false,
    };

    newItems.push(todoItem);
    setCount(count + 1);
    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      console.log(item.id);
      console.log(id);
      return item.id !== id;
    });
    setItems(newItems);
  };

  const saveItem = (id, newContent) => {
    const newItems = items.map((item) => item);
    newItems[id].content = newContent;
    setItems(newItems);
  };

  return (
    <MainLayoutStyle>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Header />
      <FriendList />
      <Category onClick={addItem} />
      <ListArea items={items} onRemove={removeItem} onSave={saveItem} />
    </MainLayoutStyle>
  );
};

export default MainLayout;
