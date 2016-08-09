import {expect} from 'chai';
import Bb from 'backbone';
import {hashHistory} from 'react-router';

import store from '../../app/scripts/store';
import Band from '../../app/scripts/models/band';

describe('Band Model', function() {

  let band = new Band();

  it('should have a voteToggle function', () => {

    expect(band.voteToggle()).to.exist;

  });

  it('should add a vote if user hasn\'t voted yet', () => {

    //function already ran once with 'anonymous' login

    expect(band.get('votes').length).to.equal(1);
    expect(band.get('votes')[0]).to.equal('anonymous');

  });

  it('should remove a vote if user already voted', () => {

    band.voteToggle();
    expect(band.get('votes').length).to.equal(0);

  });
});
