/**
 * The data processor worker is meant to be an interface between the main thread
 * containing the {@link WebGLVis} a {@link DataProcessor}. It's main purpose
 * is to receive messages from the WebGLVis, call the appropriate method of
 * the DataProcessor, then post a message of the results of the method back to
 * the WebGLVis.
 */

import DataProcessor from "./data-processor";

self.onmessage = (message) => {
  switch (message.data.type) {
    case "init":
      self.processor = new DataProcessor(message.data.specification);
      break;
    case "selectBox":
      postMessage({
        type: message.data.type,
        selection: self.processor.selectBox(message.data.points),
        bounds: message.data.points,
        event: message.data?.event,
      });
      break;
    case "selectLasso":
      postMessage({
        type: message.data.type,
        selection: self.processor.selectLasso(message.data.points),
        bounds: message.data.points,
        event: message.data?.event,
      });
      break;
    case "getClosestPoint":
    case "getClickPoint":
      const result = self.processor.getClosestPoint(message.data.point);
      postMessage({
        type: message.data.type,
        event: message.data?.event,
        ...result,
      });
      break;
    default:
      console.error(`Received unknown message type: ${message.type}`);
  }
};
