import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

if (typeof global !== 'undefined') {
    global.expect = expect;
    global.sinon = sinon;
}
