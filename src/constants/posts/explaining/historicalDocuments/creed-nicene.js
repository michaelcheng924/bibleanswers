import React from "react";

import { View } from "react-native";
import { Txt } from "../../components/shared";

const NICENE_CREED = (
  <View>
    <Txt first>
      We believe in one God, the Father Almighty, Maker of heaven and earth, and
      of all things visible and invisible;
    </Txt>
    <Txt>
      And in one Lord Jesus Christ, the Son of God, the Only-begotten, Begotten
      of the Father before all ages, Light of Light, Very God of Very God,
      Begotten, not made; of one essence with the Father,
    </Txt>
    <Txt>by whom all things were made;</Txt>
    <Txt>
      Who for us men and for our salvation came down from heaven, and was
      incarnate of the Holy Spirit and the Virgin Mary, and was made man;
    </Txt>
    <Txt>
      And was crucified also for us under Pontius Pilate, and suffered and was
      buried; And the third day He rose again, according to the Scriptures;
    </Txt>
    <Txt>
      And ascended into heaven, and sits at the right hand of the Father;
    </Txt>
    <Txt>
      And He shall come again with glory to judge the living and the dead, Whose
      kingdom shall have no end.
    </Txt>
    <Txt>
      And we believe in the Holy Spirit, the Lord, and Giver of Life, Who
      proceeds from the Father, Who with the Father and the Son together is
      worshipped and glorified, Who spoke by the Prophets;
    </Txt>
    <Txt>And we believe in one, holy, catholic*, and apostolic Church.</Txt>
    <Txt>We acknowledge one Baptism for the remission of sins.</Txt>
    <Txt>We look for the Resurrection of the dead,</Txt>
    <Txt>And the Life of the age to come. Amen.</Txt>
    <Txt style={{ fontStyle: "italic" }}>
      * that is, the true Christian church of all times and all places
    </Txt>
  </View>
);

export default NICENE_CREED;
