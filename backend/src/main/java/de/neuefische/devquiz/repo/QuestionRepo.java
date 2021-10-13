package de.neuefische.devquiz.repo;

import de.neuefische.devquiz.model.Question;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.PagingAndSortingRepository;


import java.util.*;

@Repository
public interface QuestionRepo extends PagingAndSortingRepository<Question, String> {

    List<Question> findAll();

}
