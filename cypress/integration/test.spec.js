describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://192.168.115.193:5000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
