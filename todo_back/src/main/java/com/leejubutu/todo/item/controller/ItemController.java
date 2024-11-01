package com.leejubutu.todo.item.controller;

import com.leejubutu.todo.item.domain.Item;
import com.leejubutu.todo.item.dto.request.ItemDeleteRequest;
import com.leejubutu.todo.item.dto.request.ItemRequest;
import com.leejubutu.todo.item.dto.request.ItemUpdateRequest;
import com.leejubutu.todo.item.dto.response.ItemResponse;
import com.leejubutu.todo.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/todo")
    public List<ItemResponse> get(){
        return itemService.getItems();
    }

    @PostMapping("/todo/add")
    public void add(@RequestBody ItemRequest request){
        itemService.addItem(request);
    }

    @PatchMapping("/todo/update")
    public void update(@RequestBody ItemUpdateRequest request){
        itemService.updateItem(request);
    }

    @DeleteMapping("/todo/delete")
    public void delete(@RequestBody ItemDeleteRequest itemDeleteRequest){
        itemService.deleteItem(itemDeleteRequest);
    }
}
