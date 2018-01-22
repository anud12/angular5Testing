package ut.ro.esolutions.controler

import ro.esolutions.sonarAngularDemo.controler.EntityController
import spock.lang.Specification

class EntityControllerSpec extends Specification {

    def entityController = new EntityController()

    def "get" () {
        given:
        def expectedValue = "Hello World"
        when:
        def result = entityController.get()

        then:
        result == expectedValue;
    }
}
