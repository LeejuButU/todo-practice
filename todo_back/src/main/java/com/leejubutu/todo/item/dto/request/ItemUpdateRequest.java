package com.leejubutu.todo.item.dto.request;

import lombok.Getter;

@Getter
public class ItemUpdateRequest {
    private Long itemId;

    private String content;
}
