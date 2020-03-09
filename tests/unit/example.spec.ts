import { shallowMount } from "@vue/test-utils";
import PageWrapper from "@/components/PageWrapper.vue";

describe.skip("PageWrapper.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PageWrapper, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
