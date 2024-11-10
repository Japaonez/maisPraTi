package com.example.api_user.dto;

import lombok.Data;

@Data
public class UserDTO {
    private int id;
    private String nome, email, cargo, senha;
}
