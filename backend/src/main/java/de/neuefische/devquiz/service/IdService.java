package de.neuefische.devquiz.service;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@NoArgsConstructor
@Service
public class IdService {

    public String generateId() {
        return UUID.randomUUID().toString();
    }
}
