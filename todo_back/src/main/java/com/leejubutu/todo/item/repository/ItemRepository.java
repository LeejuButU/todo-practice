package com.leejubutu.todo.item.repository;

import com.leejubutu.todo.item.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Long> {


}
