import { render, shallow } from "enzyme";
import { expect } from "chai";

import Post from "../pages/post";

describe("With Enzyme", () => {
  it("should work", () => {
    const wrapper = shallow(
      <Post
        post={{
          title: "Title",
          subtitle: "Subtitle",
          date_added: "12/1/2018",
          updated_at: "12/1/2018",
          published: true,
          references: "reference",
          html: "test 1 blah 30 hey[1]"
        }}
      />
    );
    console.log("======", wrapper);
    // expect(wrapper.find("strong")).to.have.lengthOf(3);
    // expect(wrapper.text()).to.contain("References");
  });
});
