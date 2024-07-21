package com.leejubutu.todo.item.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ItemResponse {
    private Long itemId;

    private String content;

    private boolean isChecked;
}
