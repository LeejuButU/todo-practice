package com.leejubutu.todo.item.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Item {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

    private String content;

    private boolean isChecked;

    public Item(String a, boolean b) {
        content = a;
        isChecked = b;
    }

    public void updateContent(String newContent){
        this.content = newContent;
    }
}
