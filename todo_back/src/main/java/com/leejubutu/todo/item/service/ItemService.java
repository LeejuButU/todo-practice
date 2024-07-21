package com.leejubutu.todo.item.service;

import com.leejubutu.todo.item.domain.Item;
import com.leejubutu.todo.item.dto.request.ItemRequest;
import com.leejubutu.todo.item.dto.response.ItemResponse;
import com.leejubutu.todo.item.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<ItemResponse> getItems(){
        List<Item> items = itemRepository.findAll();
        List<ItemResponse> result = items.stream().map((item)->toItemResponse(item)).toList();
        return result;
    }

    private ItemResponse toItemResponse(Item item){
        ItemResponse itemResponse = new ItemResponse(item.getItemId(), item.getContent(), item.isChecked());
        return itemResponse;
    }

    @Transactional
    public void addItem(ItemRequest itemRequest){
        Item item = new Item(itemRequest.getContent(), false);
        itemRepository.save(item);
    }
}