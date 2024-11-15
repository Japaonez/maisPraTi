package com.example.api_user.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class JwtTokenProvider {
    @Value("${jwt.secret}")
    private String secretKey;

    public String extractNome(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);

        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();

        return createToken(claims, userDetails.getNome());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt()
                .setExpiration(new Date(System.currentTimeMillis() + 3600 * 10))
                .signWith(SignatureAlgorithm.ES256, secretKey).compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String nome = extractNome(token);
        return(nome.equals(userDetails.getNome()) && !isTokenExpired(token));
    }

    private Date isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    private boolean extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }
}
