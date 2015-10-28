import React from 'react/addons';
import {List, Map} from 'immutable';
import Main from '../../src/components/Main';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;

describe('Main', () => {

  it('displays one header', () => {
    const component = renderIntoDocument(
      <Main><h1>Hello!</h1></Main>
    );
    const entries = scryRenderedDOMComponentsWithTag(component, 'h1');
    expect(entries.length).to.equal(1);
  });

});
