import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { AddedGuest } from "../generated/Guestbook/Guestbook"

export function createAddedGuestEvent(
  message: string,
  guest: ethereum.Tuple
): AddedGuest {
  let addedGuestEvent = changetype<AddedGuest>(newMockEvent())

  addedGuestEvent.parameters = new Array()

  addedGuestEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  addedGuestEvent.parameters.push(
    new ethereum.EventParam("guest", ethereum.Value.fromTuple(guest))
  )

  return addedGuestEvent
}
