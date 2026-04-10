#!/usr/bin/env python3
"""TASK 0"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    "Retourne task"
    delay = max_delay * random.random()
    await asyncio.sleep(delay)
    return delay
