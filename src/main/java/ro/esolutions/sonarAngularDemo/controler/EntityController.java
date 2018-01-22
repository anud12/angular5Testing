package ro.esolutions.sonarAngularDemo.controler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.esolutions.sonarAngularDemo.model.MessageModel;

@RestController
@CrossOrigin
public class EntityController {

	@GetMapping()
	public ResponseEntity<MessageModel> get() {
		return ResponseEntity.ok(new MessageModel("Hello world"));
	}

}
